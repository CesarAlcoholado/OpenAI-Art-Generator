/* eslint-disable react/prop-types */
import React from 'react'
import { Skeleton } from '../skeleton/Skeleton'
import { ImageCard } from '../imageCard/ImageCard';
import { Error } from '../error/Error';

export const ImageResults = ({listOfImages, isLoading, error}) => {

  return (
    <div className="container max-w-5xl mx-auto px-2 py-6">
      <div className="container max-w-2xl mr-auto">
        <div className="flex flex-col items-start">
          {
            isLoading ? (
              <>
                {" "}
                <h4 className="font-light opacity-80 hidden md:inline-block">
                  Generating, please wait...
                </h4>
                <Skeleton item={1} />
              </>
            ) : error ? (
              <>
                <h4 className="font-light opacity-80 hidden md:inline-block">
                  Something went wrong, please try again
                </h4>
                <Error />
              </>
            ) : (
              <ImageCard image={listOfImages} />
            )
            // )
          }
        </div>
      </div>
    </div>
  );
}
